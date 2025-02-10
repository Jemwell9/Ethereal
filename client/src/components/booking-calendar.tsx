import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";

interface BookingCalendarProps {
  selectedDate?: Date;
  onSelect: (date: Date | undefined) => void;
}

export default function BookingCalendar({ selectedDate, onSelect }: BookingCalendarProps) {
  return (
    <Card className="p-4">
      <Calendar
        mode="single"
        selected={selectedDate}
        onSelect={onSelect}
        className="rounded-md border"
        disabled={(date) => date < new Date() || date.getDay() === 0 || date.getDay() === 6}
      />
    </Card>
  );
}
