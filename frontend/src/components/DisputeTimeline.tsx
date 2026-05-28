import Badge from "./Badge";

interface DisputeTimelineProps {
  events: Array<{
    id: string;
    title: string;
    actor: string;
    timestamp: string;
    status: "open" | "pending" | "resolved";
  }>;
}

export default function DisputeTimeline({ events }: DisputeTimelineProps) {
  return (
    <ol className="space-y-3">
      {events.map((event) => (
        <li key={event.id} className="rounded-lg border border-theme-border bg-theme-card p-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-sm font-medium text-theme-heading">{event.title}</p>
              <p className="text-xs text-theme-text">{event.actor} · {new Date(event.timestamp).toLocaleString()}</p>
            </div>
            <Badge label={event.status} tone={event.status === "resolved" ? "success" : "warning"} />
          </div>
        </li>
      ))}
    </ol>
  );
}
