export interface Feedback {
  id: number;
  event_id: number;
  category_id: number;
  name?: string;
  comment: string;
  created_at: Date;
}
