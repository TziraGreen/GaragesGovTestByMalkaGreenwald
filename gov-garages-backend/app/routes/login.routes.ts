// import express, { Request, Response } from 'express';
// import jwt from 'jsonwebtoken';
// import bcrypt from 'bcrypt';
// const router = express.Router();


// router.post('/login', (req: Request, res: Response) => {
//     const { username, password } = req.body;
  
//     const user = users.find((u) => u.username === username);
//     if (!user) {
//       return res.status(401).json({ message: 'Invalid username or password' });
//     }
  
//     if (!bcrypt.compareSync(password, user.password)) {
//       return res.status(401).json({ message: 'Invalid username or password' });
//     }
  
//     const token = jwt.sign({ userId: user.id }, secretKey, { expiresIn: '1h' });
//     res.json({ token });
//   });