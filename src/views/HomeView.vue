<template>
  <section class="home">
    <header class="home-header">
      <h1>The Anything Blog.</h1>
    </header>
    <div class="home-banner">
      <div class="mobile-banner-menu">
        <div class="menu">
          <div class="bar"></div>
        </div>
      </div>
    </div>
  </section>
  <div class="home-description">
    <h2>
      Welcome to The Anything Blog. A blogging platform built by young
      developers with a passion for the new age culture.
    </h2>
    <div class="featured">
      <header class="featured-header">
        <h2>Featured Blogs</h2>
      </header>
      <!-- Math.round(blogs.length*Math.random()) -->
      <div class="blog-posts">
        <div class="posts">1</div>
        <div class="posts">2</div>
        <div class="posts">3</div>
      </div>
    </div>
    <div class="catergory">
      <header class="catergory-header">
        <h2>Catergory</h2>
      </header>
      <div class="catergory-container">
        <router-link
          :to="{
            name: 'gamingblogs',
          }"
        >
          <div class="item img1">
            <h3>GAMING</h3>
          </div>
        </router-link>
        <router-link
          :to="{
            name: 'lifestyleblogs',
          }"
        >
          <div class="item img2">
            <h3>LIFESTYLE</h3>
          </div>
        </router-link>
        <router-link
          :to="{
            name: 'musicblogs',
          }"
        >
          <div class="item img3">
            <h3>MUSIC</h3>
          </div>
        </router-link>
        <router-link
          :to="{
            name: 'techblogs',
          }"
        >
          <div class="item img4">
            <h3>TECH</h3>
          </div>
        </router-link>
      </div>
    </div>
  </div>
  <Contact />
</template>

<script>
import Contact from "@/components/Contact.vue";
export default {
  name: "HomeView",
  components: {
    Contact,
  },
};
</script>
<style scoped>
.home {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 80vh;
  background-color: #cdcdcd;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url("https://images.unsplash.com/photo-1540651810471-5699df74834f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.home-header {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
}
.home-header h1 {
  text-align: center;
  font-size: 64px;
  font-weight: 700;
  padding: 0;
  margin: 0;
  color: #ffffff;
}
.home-banner {
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: row;
  gap: 1.5rem;
  min-height: 50px;
  background-color: #130f40;
}
.banner-search {
  justify-content: center;
  margin-right: 1.5rem;
  display: flex;
  align-items: center;
  width: 100%;
  gap: 1.5rem;
}
.banner-search {
  font-size: 10px;
  font-weight: 400;
  color: #1f1f1f;
}
.banner-search input {
  border: none;
  outline: none;
  border-radius: 3px;
  min-width: 200px;
  padding: 5px;
  color: #1f1f1f;
  text-align: center;
  box-shadow: 0px 4px 4px 0px #130f40;
}
.banner-search input::placeholder {
  font-weight: 700;
  font-size: 12px;
}
.banner-search h2 {
  color: #fff;
}
.home-description {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  gap: 5rem;
}
.home-description h2 {
  width: 80%;
  margin-top: 2rem;
  margin-bottom: 0;
  font-size: 48px;
  font-weight: 700;
  padding: 0;
  color: #1f1f1f;
  text-align: center;
}
.featured,
.catergory {
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  gap: 1.5rem;
}
.featured-header,
.catergory-header {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.featured-header h2,
.catergory-header h2 {
  width: 80%;
  font-size: 32px;
  font-weight: 700;
  padding: 0;
  margin: 0;
  color: #1f1f1f;
  text-align: center;
}
.blog-posts {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  gap: 1.5rem;
}
.posts {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35%;
  height: 250px;
  background-color: #cdcdcd;
}
.catergory-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 200px;
  gap: 1.5rem;
  width: 80%;
  margin-bottom: 5rem;
}
.item {
  background-color: #cdcdcd;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
}

/* .item > p {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 90%;
  background: rgba(0, 0, 0, 10%);
  margin-top: -25px;
  font-size: 10px;
  font-weight: 700;
  color: white;
} */

.item > h3 {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 19vh;
  width: 90%;
  background: rgba(0, 0, 0, 1%);
  font-size: 35px;
  font-weight: 700;
  color: white;
}

.img1 {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  background-image: url("https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.img2 {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  background-image: url("https://images.unsplash.com/photo-1443916568596-df5a58c445e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.img3 {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  background-image: url("https://images.unsplash.com/photo-1461784180009-21121b2f204c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.img4 {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  background-image: url("https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

@media screen and (max-width: 1100px) {
  .home-description h2 {
    text-align: center;
    font-size: 40px;
  }
  .home-description {
    gap: 1rem;
  }
}
@media screen and (max-width: 800px) {
  .featured-header h2,
  .catergory-header h2 {
    width: 100%;
    font-size: 32px;
    font-weight: 700;
    color: #1f1f1f;
    text-align: center;
    margin: 0;
  }
  .home-description h2 {
    width: 95%;
  }
  .blog-posts,
  .catergory-container {
    width: 95%;
  }
  .catergory-container {
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
  }
  .blog-posts {
    flex-direction: column;
  }
  .posts {
    width: 100%;
    height: 400px;
  }
}
@media screen and (max-width: 600px) {
  .home-header h1 {
    font-size: 40px;
  }
  .home-description h2 {
    text-align: center;
    font-size: 28px;
    margin-top: 2rem;
    margin-bottom: 0;
    width: 95%;
  }
  .banner-search {
    width: 100%;
    justify-content: center;
  }
  .banner-search input {
    min-width: 100px;
    gap: 1.5rem;
  }
  .banner-search h2 {
    font-size: 12px;
  }
  .featured-header h2,
  .catergory-header h2 {
    margin: 0;
  }
}
</style>
