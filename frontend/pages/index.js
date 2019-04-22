import Cars from '../components/Cars';

const Home = props => {
  return (
    <div>
      <Cars page={parseFloat(props.query.page) || 1} />
    </div>
  );
};

export default Home;
