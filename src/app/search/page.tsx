import { LoadBoard } from '@/components/load-board';
import { loads } from '@/lib/data';

export default function SearchPage() {
  return (
    <div className="flex-1 overflow-hidden">
      <LoadBoard initialLoads={loads} />
    </div>
  );
}
