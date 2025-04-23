import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/solid";

export default function SocialLogin() {
  return (
    <>
      <div className="w-full h-px bg-neutral-500" />
      <div className="flex flex-col gap-3">
        <Link
          href="/github/start"
          className="primary-btn flex h-10 items-center justify-center gap-3"
        >
          <span>
            <FaGithub className="h-6 w-6" />
          </span>
          <span>Continue with GitHub</span>
        </Link>
        <Link
          href="/sms"
          className="primary-btn flex h-10 items-center justify-center gap-3"
        >
          <span>
            <ChatBubbleOvalLeftEllipsisIcon className="h-6 w-6" />
          </span>
          <span>Continue with SMS</span>
        </Link>
      </div>
    </>
  );
}
