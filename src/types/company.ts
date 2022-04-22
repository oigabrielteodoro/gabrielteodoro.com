import type {
  RichTextField,
  TimestampField,
  SelectField,
  ImageField,
} from "@prismicio/types";

export type Company = {
  url: string;
  logo: ImageField;
  name: RichTextField;
  joinedAt: string;
  exitedAt: TimestampField;
  occupation: SelectField<
    | "Front-End Developer"
    | "Back-End Developer"
    | "Full-Stack Developer"
    | "Mobile Developer"
  >;
  workload: SelectField<"Full-time" | "Part-time">;
};
