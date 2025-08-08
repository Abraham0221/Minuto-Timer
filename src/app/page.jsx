'use client';
import '../app/layouts/page.css';
import { useRouter } from 'next/navigation';


export default function Page() {
  const router = useRouter();
  return (
    <body>
          <div className='centerContainer'>
          <span>
              Choose
          </span>
          <div className='firstButtons'>
              <button className='blue' onClick={() => router.push('/Bluetheme')}></button>
              <button className='pink' onClick={() => router.push('/Pinktheme')}></button>
          </div>
          </div>
      </body>
  );
}
