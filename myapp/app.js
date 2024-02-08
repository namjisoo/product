const express = require("express");
const http = require("http");
const socketIO = require("socket.io");
const cors = require("cors");

const app = express();
const server = http.createServer(app);
// 서버 측 Socket.IO 설정
const io = socketIO(server, {
  cors: {
    origin: "http://localhost:3000", // 클라이언트의 주소로 변경
    methods: ["GET", "POST"],
  },
});

const PORT = process.env.PORT || 3001;
const chatRooms = {}; // chatRooms 초기화

io.on("connection", (socket) => {
  console.log("User connected");

  socket.on("join", (room) => {
    socket.join(room);
    if (!chatRooms[room]) {
      chatRooms[room] = [];
    }
  });

  socket.on("message", (data) => {
    const { room, sender, text } = data;
    chatRooms[room].push({ sender, text });
    io.to(room).emit("message", { sender, text });
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

// Express 앱에 Socket.IO 서버를 attach
io.attach(server);
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

// 미들웨어 추가
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
