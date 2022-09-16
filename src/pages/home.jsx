"use strict";

// TODO: webpack 配置 css modules
import styles from "./home.module.scss";
import BigImg from "~/IeoTkE4xBJ4.jpg";
import image from "~/logo.png";

export default function Home() {
  // test externals
  var obj = { id: 1001, name: "hello world" };

  // eslint-disable-next-line
  _.forIn(obj, (key, val) => {
    console.log("key, val:", key, val);
  });
  
  console.log('styles:', styles);

  return (
    <div>
      <div>
        <img src={BigImg} className={styles.bigimg} />
        <img src={image} className={styles.img} />
      </div>
    </div>
  );
}
