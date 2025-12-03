import { Smartphone } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center justify-center gap-2" aria-label="TelMarq logo">
      <Smartphone className="h-6 w-6 text-primary" />
      <span className="font-bold text-lg text-foreground">TelMarq</span>
    </div>
  );
}
