export const UNIVERSITY = 'UNIVERSITY';

export type subjectObject = {
  name: string;
  id: number;
  img: string;
  desc: string;
  subject_status: number;
  units: number[];
};

export interface TopicObject {
  id: number;
  topic_no: number;
  topic_name: string;
  update_at: string;
  created_at: string;
  links: number[];
  files: number[];
  images: number[];
  videos: number[];
}

export type TopicData = TopicObject;

export interface SingleSubjectObject {
  id: number;
  name: string;
  subject_status: number;
  img: string;
  desc: string;
  units: UnitObject[];
}

export interface UnitObject {
  id: number;
  name: string;
  unit_no: number;
  completed: boolean;
  topics: TopicObject[];
}
