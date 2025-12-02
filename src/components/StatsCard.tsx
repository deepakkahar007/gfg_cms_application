import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type StatsCardProps = {
  title: string;
  value: number | string;
  trend: number; // example: +12.5
};

const StatsCard = ({ title, value, trend }: StatsCardProps) => {
  return (
    <Card className="p-4 bg-white/5 border-white/10 text-white backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-lg font-bold">{title}</CardTitle>
      </CardHeader>

      <CardContent>
        <p className="text-4xl font-extrabold">{value}</p>
      </CardContent>

      <CardFooter>
        <p className="text-sm font-medium text-green-400">
          ▲ {trend}% from last month
        </p>
      </CardFooter>
    </Card>
  );
};

export default StatsCard;
