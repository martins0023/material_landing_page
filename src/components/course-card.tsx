import { Typography, Card, CardBody, CardHeader, Button } from "@material-tailwind/react";
import Image from "next/image";

interface CourseCardProps {
  img: string;
  title: string;
  desc: string;
  buttonLabel: string;
}

export function CourseCard({ img, title, desc, buttonLabel }: CourseCardProps) {
  return (
    <Card color="transparent" shadow={false} {...({} as any)}>
      <CardHeader floated={false} className="mx-0 mt-0 mb-6 h-48" {...({} as any)}>
        <Image width={768} height={768} src={img} alt={title} className="h-full w-full object-cover" />
      </CardHeader>
      <CardBody className="p-0" {...({} as any)}>
        <a
          href="#"
          className="text-blue-gray-900 transition-colors hover:text-gray-800"
        >
          <Typography variant="h5" className="mb-2" {...({} as any)}>
            {title}
          </Typography>
        </a>
        <Typography className="mb-6 font-normal !text-gray-500" {...({} as any)}>
          {desc}
        </Typography>
        <a href="https://huggingface.co/spaces/miracle01/flower_classification_fcahpt_hnd2_tolulope">
        <Button color="gray" size="sm" {...({} as any)}>
          {buttonLabel}
        </Button>
        </a>
      </CardBody>
    </Card>
  );
}

export default CourseCard;
