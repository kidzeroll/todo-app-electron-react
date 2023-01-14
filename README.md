# Todo App

## **Cara menjalankan program**

pertama clone dulu repository menggunakan perintah `git clone`

```markdown
git clone https://github.com/kidzeroll/todo-app-electron-react.git
```

kemudian masuk kedalam direktori project

```markdown
cd todo-app-electron-react-master
```

jalankan perintah `npm install`

```markdown
npm install
```

kemudian jalankan perintah `yarn electron:start`

```markdown
yarn electron:start
```

jika tidak muncul aplikasinya jalankan perintah `npx electron .`

```markdown
npx electron .
```

## **Untuk Backend**

copy file `.env.local` menjadi `.env`
kemudian ubah value `MONGODB_URI` sesuai dengan mongodb anda
kemudian jalankan perintah `npm install` dan `npm start` maka server akan berjalan di http://localhost:5000

## **Cara build aplikasi**

jalankan perintah

```markdown
yarn electron:package:<platform>
```
