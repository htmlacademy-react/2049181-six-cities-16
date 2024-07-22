import { Link } from 'react-router-dom';

function NotFoundPage() {

  return(
    <>
      <h1>404 Not Found</h1>
      <Link to={'/'}>To main page</Link>
    </>
  );
}

export default NotFoundPage;
