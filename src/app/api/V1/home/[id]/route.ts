export function GET(req: Request, { params }: { params: { id: string } }) {
  return Response.json({ id: params.id, method: "get" });
}
export function PATCH(req: Request, { params }: { params: { id: string } }) {
  return Response.json({ id: params.id, method: "edit" });
}
export function DELETE(req: Request, { params }: { params: { id: string } }) {
  return Response.json({ id: params.id, method: "delete" });
}
