import httpRequest from "../index";
export function echartsRequest() {
  return httpRequest.get({
    url: "field/knowledgeSystem/getTypeCount",
  });
}
