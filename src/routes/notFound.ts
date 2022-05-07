import NotFound from "../client/components/NotFound";

export default function respondNotFound(req: any, res: any): void {
  res.write(NotFound(req));
  res.end();
}
