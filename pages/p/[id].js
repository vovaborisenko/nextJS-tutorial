import { useRouter } from 'next/router';
import MyLayout from '../../components/MyLayout';

const Content = () => {
  const router = useRouter();

  return (
    <>
      <h1>{router.query.id}</h1>
      <p>This is blog post content.</p>
    </>
  );
}

const Page = () => (
    <MyLayout>
      <Content />
    </MyLayout>
);

export default Page;