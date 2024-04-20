import app from "./app.js";

app.listen(process.env.PORT, ()=> {
    console.log('Server RUnning On Port ${process.env.PORT}');
})