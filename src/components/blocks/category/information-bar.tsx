"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useParams } from "next/navigation";

const InformationBar = () => {
  const { category = "all" } = useParams();

  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-2 py-3 border-y border-muted px-2">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/blocks">Blocks</BreadcrumbLink>
          </BreadcrumbItem>
          {category !== "all" && (
            <>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="capitalize">
                  {category}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </>
          )}
        </BreadcrumbList>
      </Breadcrumb>

      <p className="text-muted-foreground">
        Results for{" "}
        <span className="text-foreground font-bold text-lg capitalize">
          &quot;{category} Shadcn UI Blocks&quot;
        </span>
      </p>
    </div>
  );
};

export default InformationBar;
