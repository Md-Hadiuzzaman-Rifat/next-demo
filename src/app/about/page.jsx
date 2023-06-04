import Image from "next/image";
import styles from "./About.module.css";
import cover from "/public/cover.jpg";
const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.about_cover}>
        <Image src={cover} alt="Discuss in a meeting."></Image>
        <div className={styles.about_cover_content}>
          <h3>Lorem ipsum.</h3>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
      </div>
      <div className={styles.about_body}>
        <div>
          <h1>What are we?</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
            sequi odio hic tempore quae voluptatum dolor ex, nisi earum
            recusandae aspernatur, pariatur quisquam possimus eveniet in dolorem
            maiores. Voluptate, nostrum.
          </p>
          <br />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit
            tempore, doloribus quas deserunt hic nam ut, officia error unde
            obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Corporis sunt cumque porro delectus cum nihil ut, fuga debitis
            consequuntur corrupti?
          </p>
        </div>
        <div >
          <h1>What we do?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            fugiat culpa unde ab quis, reprehenderit, placeat necessitatibus,
            similique tempora odit molestias ea quidem iste consectetur
            deserunt. Mollitia consectetur quod neque!
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
            sit?
          </p>
          <br />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
            vero totam tempore voluptatibus laudantium consectetur!
          </p>
          <br />
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
