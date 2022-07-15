import Link from 'next/link';

import Layout from '../../components/Layout';
export async function getStaticProps() {
  const response = await fetch(`${window.location.origin}/art`);

  const data = await response.json();

  return {
    props: { content: data },
  };
}


export default function Gallery({ content }) {
  console.log(content);
  return (
    <>
      {content.map((elements) => (
        <div key={elements.id}>
          <Link href={`/gallery/${elements.id}`}>
            <a>
              <img src={elements.img} width='150' />
            </a>
          </Link>
          <h2> {elements.title}</h2>
        </div>
      ))}
    </>
  );
}
