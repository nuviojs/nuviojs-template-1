import Head from 'next/head';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../components/ui/card';

export default function Home() {
  const products = [
    { id: 1, name: 'T-Shirt', price: 19.99, image: '/t-shirt.jpg' },
    { id: 2, name: 'Jeans', price: 49.99, image: '/jeans.jpg' },
    { id: 3, name: 'Sneakers', price: 79.99, image: '/sneakers.jpg' },
    { id: 4, name: 'Bags', price: 79.99, image: '/sneakers.jpg' },
  ];

  return (
    <div className="container  px-2 py-3">
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <Head>
        <title>Shop-UP</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="text-center py-8">
        <h1 className="text-4xl font-bold">Welcome to Our Shop-up Store</h1>
        <p className="text-lg text-gray-600">Discover the latest fashion trends!</p>
      </header>

      <main className="py-8 flex-1 w-full max-w-6xl">
        <h2 className="text-2xl font-semibold text-center mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden">
              <CardHeader className="p-0">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
              </CardHeader>
              <CardContent className="p-4 text-center">
                <CardTitle className="text-xl font-medium">{product.name}</CardTitle>
                <CardDescription className="text-gray-700">${product.price}</CardDescription>
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                  Add to Cart
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
    </div>
  );
}