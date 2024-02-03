import { getBillboard } from '@/actions/get-billboard';
import { getProducts } from '@/actions/get-products';
import { Billboard } from '@/components/billboard';
import { ProductList } from '@/components/product-list';
import { Container } from '@/components/ui/container';

export const revalidate = 0;

export default async function Home() {
  const billboard = await getBillboard('e2d29e18-9944-429b-b5b2-7ef9389308e1');
  const products = await getProducts({ isFeatured: true });

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />

        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured products" items={products} />
        </div>
      </div>
    </Container>
  );
}
