import { getPhones } from '@/lib/data';
import { PhoneCard } from '@/components/phone-card';

export default function PhonesPage() {
  const phones = getPhones();

  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Mobile Marketplace</h1>
        <p className="text-muted-foreground">
          Browse our collection of new and used phones.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {phones.map((phone) => (
          <PhoneCard key={phone.id} phone={phone} />
        ))}
      </div>
    </div>
  );
}
