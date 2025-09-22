import { Button } from "@/shared/ui/Button";

interface JobLocationsButtonsProps {
  onClick: (value: string) => void;
}
const JobLocationsButtons: React.FC<JobLocationsButtonsProps> = ({
  onClick,
}) => {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {[
        "Jobs in California",
        "Jobs in Arizona",
        "Jobs in Washington",
        "Jobs in New York",
        "Jobs in Florida",
      ].map((job, idx) => (
        <Button key={idx} variant="secondary" onClick={() => onClick(job)}>
          {job}
        </Button>
      ))}
    </div>
  );
};
export default JobLocationsButtons;
