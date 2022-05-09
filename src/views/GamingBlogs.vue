<template>
  <section class="banner-section">
    <header class="text-banner">
      <h3>GAMING</h3>
    </header>
    <div class="home-banner">
      <div class="mobile-banner-menu">
        <div class="menu">
          <div class="bar"></div>
        </div>
      </div>
      <div class="banner-search">
        <h2>Search</h2>
        <input
          type="text"
          name="search"
          v-model="search"
          placeholder="Search posts"
        />
      </div>
      <div class="make-button">
        <button>Create New Blog</button>
        <!-- @click="createBlog()" -->
      </div>
    </div>
  </section>

  <div class="container">
    <div v-if="games.length" class="row m-5 border shadow p-5">
      <div
        v-for="game in games"
        :key="game._id"
        class="col-xl-4 col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center"
      >
        <router-link
          :to="{
            name: 'PostDetails',
            params: {
              id: game._id,
            },
          }"
        >
          <h2 class="card text-white animate__animated animate__zoomIn">
            <img :src="game.main_image" class="" alt="..." />
            {{ game.title }}
            <br />
            {{ game.subtitle }}
            <br />
            {{ game.category }}
            <br />
            {{ game.desc }}
          </h2>
        </router-link>
      </div>
    </div>
    <div v-else>
      <p class="m-5">Loading Games...</p>
      <div class="orbit-spinner">
        <div class="orbit"></div>
        <div class="orbit"></div>
        <div class="orbit"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      games: [],
      title: "",
      subtitle: "",
      desc: "",
      category: "",
      main_image: "",
      search: "",
    };
  },

  mounted() {
    fetch("https://the-anything-blog.herokuapp.com/games", {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        this.products = json;
      });
  },

  computed: {
    filterBlogs() {
      return this.posts.filter((post) => {
        return post.title.toLowerCase().match(this.search.toLowerCase());
      });
    },
  },

  methods: {
    // Create Product
    createBlog() {
      if (!localStorage.getItem("access")) {
        alert("User not logged in");
        return this.$router.push({ name: "signin" });
      }
      fetch("https://the-anything-blog.herokuapp.com/posts", {
        method: "POST",
        body: JSON.stringify({
          title: this.title,
          subtitle: this.subtitle,
          desc: this.desc,
          category: this.category,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${localStorage.getItem("access")}`,
        },
      })
        .then((res) => res.json())
        .then((json) => {
          alert("Blog created!");
          location.reload();
        })
        .catch((err) => {
          alert(err);
        });
    },
  },
};
</script>

<style scoped>
.banner-section {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
  margin: 0;
  padding: 0;
  background-image: url("https://images.unsplash.com/photo-1544652478-6653e09f18a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.text-banner {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 50vh;
  background: rgba(0, 0, 0, 10%);
}

.text-banner h3 {
  font-size: 60px;
  font-weight: 700;
  color: white;
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

.make-button {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 10px;
  margin-bottom: 10px;
  gap: 1rem;
}

button {
  min-width: 100px;
  padding: 8px 10px;
  border: none;
  border-radius: 3px;
  font-weight: 600;
  font-size: 10px;
  background-color: #7ed6df;
  color: #130f40;
}

.orbit-spinner,
.orbit-spinner * {
  box-sizing: border-box;
}

.orbit-spinner {
  height: 55px;
  width: 55px;
  border-radius: 50%;
  perspective: 800px;
}

.orbit-spinner .orbit {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.orbit-spinner .orbit:nth-child(1) {
  left: 0%;
  top: 0%;
  animation: orbit-spinner-orbit-one-animation 1200ms linear infinite;
  border-bottom: 3px solid #130f40;
}

.orbit-spinner .orbit:nth-child(2) {
  right: 0%;
  top: 0%;
  animation: orbit-spinner-orbit-two-animation 1200ms linear infinite;
  border-right: 3px solid #130f40;
}

.orbit-spinner .orbit:nth-child(3) {
  right: 0%;
  bottom: 0%;
  animation: orbit-spinner-orbit-three-animation 1200ms linear infinite;
  border-top: 3px solid #130f40;
}

@keyframes orbit-spinner-orbit-one-animation {
  0% {
    transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
  }
}

@keyframes orbit-spinner-orbit-two-animation {
  0% {
    transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
  }
}

@keyframes orbit-spinner-orbit-three-animation {
  0% {
    transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
  }
}
</style>
