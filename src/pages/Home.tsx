import Banner from '@/components/Banner';
import About from '@/components/About';
import Experience from '@/components/Experience';
import SkillList from '@/components/SkillList';
import Contact from '@/components/Contact';
import Projects from '@/components/Projects';

const Home: React.FC = () => {
  return (
    <main className='overflow-x-hidden bg-white'>
      <Banner />
      <About />
      <Experience />
      <SkillList />
      <Projects />
      <Contact />
    </main>
  );
};

export default Home;
