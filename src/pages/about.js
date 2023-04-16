

import two from '../../components/Images/aboutt (1).jpg';
import one from '../../components/Images/aboutt (3).jpg';
import styles from '../../src/styles/mainService.module.css';

const About = () => {
  return (
    <>
      <div className={styles.aboutTopBanner}>
        <div className='container mx-auto py-12'>
          <div className='py-12'>
            <h4 className='text-center text-3xl py-12 text-gray-50 '>About</h4>
          </div>

        </div>
      </div>
      <div className='py-12 grid sm:grid-cols-1 md:grid-cols-2 container'>
        <div className={styles.aboutMiddleBanner}>

        </div>
        <div>
          <h2 className='pl-12 text-4xl text-left font-semibold leading-normal'>Make Your Dream Safari into <br></br> Unforgettable Memories!</h2>
          <p className='text-left pl-12'>
            Grajem Tours and travel company in Kenya is a well established tours, travel and Events Company with over 3 years experience in handling inbound and outbound holidays not only for domestic<br></br><br></br> tourists but also international tourists from all over the world.

            Our specialty is the ability to design unique tours and safaris to fit every type of tourist, from the budget to the luxury providing a unique opportunity to combine bush and beach adventures<br></br> <br></br> with East Africa’s spectacular scenery and not forgetting the rest of the world hidden treasures!

            Grajem Tours and Travel is run by a team of over 17 tourism professionals who are passionate about safari adventures with an in-depth knowledge of the Tour & Travel industry but above<br></br><br></br> all they understand well the needs of today’s tourists by delivering quality, and affordable packages.
          </p>
        </div>
      </div>
     
    </>
  );
};

export default About;
