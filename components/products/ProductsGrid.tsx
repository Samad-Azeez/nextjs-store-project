import { formatCurrency } from '@/utils/format';
import { Product } from '@prisma/client';
import Link from 'next/link';
import { Card, CardContent } from '../ui/card';
import Image from 'next/image';

function ProductsGrid({ products }: { products: Product[] }) {
  return (
    <div className='pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
      {products.map((product) => {
        const { id: productId, name, price, image } = product;

        const dollarsAmount = formatCurrency(price);

        return (
          <article key={productId} className='group relative'>
            <Link href={`/products/${productId}`}>
              <Card className='transform group-hover:shadow-lg transition-shadow duration-500'>
                <CardContent className='p-4'>
                  <div className='relative h-64 md:h-48 rounded overflow-hidden'>
                    <Image
                      src={image}
                      alt={name}
                      fill
                      sizes='(max-width:768px) 100vw,(max-width:1200px) 50vw'
                      priority
                      className='rounded w-full object-cover transform group-hover: scale-110 transition-transform duration-500'
                    />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </article>
        );
      })}
    </div>
  );
}

export default ProductsGrid;
