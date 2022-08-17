import { StackContext, Topic } from "@serverless-stack/resources";

export function MyStack({ stack }: StackContext) {
  new Topic(stack, "MyTopic");
}
