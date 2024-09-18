import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Layout from "../../components/layout";
import ProjectList from "../../components/ProjectList/ProjectList";
import About from "../About/About";
import ContactPage from "../ContactPage/ContactPage";

function Home() {
  return (
    <>
      <Layout>
        <Header />
        <main>
          <ProjectList />
          <About />
          <ContactPage />
          <Footer />
        </main>
      </Layout>
    </>
  );
}
export default Home;
