import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Circle } from "lucide-react"

const activities = [
  {
    title: "Order Delivered",
    completed: true,
    current: false,
  },
  {
    title: "Payment Received",
    completed: true,
    current: false,
  },
  {
    title: "Invoice Generated",
    completed: false,
    current: true,
  },
  {
    title: "#INV-1123 marked as paid",
    completed: false,
    current: false,
  },
  {
    title: "#INV-1123 marked as paid",
    completed: false,
    current: false,
  },
  {
    title: "#INV-1123 marked as paid",
    completed: false,
    current: false,
  },
]

export function ActivityTimeline() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Activity Timeline</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div key={index} className="flex items-center space-x-3">
              {activity.completed ? (
                <CheckCircle className="w-5 h-5 text-success" />
              ) : (
                <Circle className="w-5 h-5 text-muted-foreground" />
              )}
              <span
                className={`text-sm ${
                  activity.completed
                    ? "text-foreground"
                    : activity.current
                      ? "text-primary font-medium"
                      : "text-muted-foreground"
                }`}
              >
                {activity.title}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
