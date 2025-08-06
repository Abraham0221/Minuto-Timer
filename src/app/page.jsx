import App from './routes/App';
import Link from 'next/link';
import '../app/layouts/page.css';

export default function Page() {
  return (
    <body>
          <div className='centerContainer'>
          <span>
              Choose
          </span>
          <div className='firstButtons'>
              <Link href='/blue'><button ></button></Link>
              <Link href='/pink'><button ></button></Link>
          </div>
          </div>
      </body>
  );
}
