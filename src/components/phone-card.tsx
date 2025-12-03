import Image from 'next/image';
import Link from 'next/link';
import type { Phone } from '@/lib/data';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface PhoneCardProps {
  phone: Phone;
}

export function PhoneCard({ phone }: PhoneCardProps) {
  return (
    <Link href={`/phones/${phone.id}`} className="group">
      <Card className="h-full overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1">
        <CardHeader className="p-0">
          <div className="relative aspect-square w-full">
            <Image
              src={phone.image}
              alt={phone.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              data-ai-hint="smartphone"
            />
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <Badge variant={phone.condition === 'New' ? 'default' : 'secondary'} className="mb-2 bg-primary/10 text-primary border-primary/20">{phone.condition}</Badge>
          <CardTitle className="text-lg font-semibold leading-tight">{phone.name}</CardTitle>
          <CardDescription className="text-muted-foreground">{phone.brand}</CardDescription>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <p className="text-xl font-bold text-primary">${phone.price}</p>
        </CardFooter>
      </Card>
    </Link>
  );
}
