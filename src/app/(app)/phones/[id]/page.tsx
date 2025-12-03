'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { getPhoneById, type Phone } from '@/lib/data';
import {
  Badge,
  Star,
  Smartphone,
  MemoryChip,
  Camera,
  Battery,
  Cpu,
  Monitor,
} from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Separator } from '@/components/ui/separator';
import { LoadingSpinner } from '@/components/loading-spinner';

function BuyNowButton({ phoneName }: { phoneName: string }) {
  const { toast } = useToast();
  const [isBuying, setIsBuying] = useState(false);

  const handleBuy = () => {
    setIsBuying(true);
    setTimeout(() => {
      toast({
        title: 'Purchase Successful!',
        description: `You've successfully purchased the ${phoneName}.`,
      });
      setIsBuying(false);
    }, 1500);
  };

  return (
    <Button size="lg" className="w-full mt-4" onClick={handleBuy} disabled={isBuying}>
      {isBuying ? <LoadingSpinner className="mr-2" /> : null}
      {isBuying ? 'Processing...' : 'Buy Now'}
    </Button>
  );
}

export default function PhoneDetailPage() {
  const params = useParams();
  const [phone, setPhone] = useState<Phone | null>(null);

  useEffect(() => {
    if (params.id) {
      const phoneData = getPhoneById(params.id as string);
      setPhone(phoneData || null);
    }
  }, [params.id]);

  if (!phone) {
    return (
      <div className="container flex items-center justify-center py-20">
        <LoadingSpinner className="h-8 w-8 text-primary" />
      </div>
    );
  }

  const specItems = [
    { icon: Cpu, label: 'Chipset', value: phone.specs.chipset },
    { icon: MemoryChip, label: 'RAM', value: phone.specs.ram },
    { icon: Smartphone, label: 'Storage', value: phone.specs.storage },
    { icon: Monitor, label: 'Display', value: phone.specs.display },
    { icon: Camera, label: 'Camera', value: phone.specs.camera },
    { icon: Battery, label: 'Battery', value: phone.specs.battery },
  ];

  return (
    <div className="container max-w-5xl mx-auto py-10">
      <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
        <Card className="overflow-hidden">
          <div className="relative aspect-square w-full">
            <Image
              src={phone.image}
              alt={phone.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              data-ai-hint="smartphone"
            />
          </div>
        </Card>
        <div className="flex flex-col gap-6">
          <div>
            <Badge variant={phone.condition === 'New' ? 'default' : 'secondary'} className="mb-2 bg-primary/10 text-primary border-primary/20">{phone.condition}</Badge>
            <h1 className="text-3xl lg:text-4xl font-bold">{phone.name}</h1>
            <p className="text-lg text-muted-foreground">{phone.brand}</p>
          </div>

          <div className="flex items-baseline gap-4">
             <p className="text-4xl font-bold text-primary">${phone.price}</p>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Specifications</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {specItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-4 text-sm">
                    <item.icon className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold">{item.label}:</span>{' '}
                      <span className="text-muted-foreground">{item.value}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          <Separator />

          <div>
             <h3 className="text-lg font-semibold mb-2">Seller Information</h3>
             <div className="flex items-center gap-4">
                <p className="font-medium">{phone.seller.name}</p>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <span>{phone.seller.rating.toFixed(1)}</span>
                </div>
             </div>
          </div>
          
          <BuyNowButton phoneName={phone.name} />
        </div>
      </div>
    </div>
  );
}
