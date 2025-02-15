
export interface Summary {
  id: string;
  fileName: string;
  uploadDate: string;
  status: "completed" | "processing" | "failed";
  downloadUrl?: string;
  pageCount: number;
}
