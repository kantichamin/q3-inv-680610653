import { useItemStore } from "@/store/dataStore";
import { useState } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Option = { value: string; label: string };

function OptionSelect({
  id,
  options,
  value,
  onChange,
  placeholder,
}: {
  id: string;
  options: Option[];
  value: string | null;
  onChange: (value: string) => void;
  placeholder?: string;
}) {
  return (
    <Select
      items={options}
      value={value ?? undefined}
      onValueChange={(v) => onChange(v as string)}
    >
      <SelectTrigger id={id} className="w-full min-w-0">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map((o) => (
          <SelectItem key={o.value} value={o.value}>
            {o.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export function OverviewCards() {
  const inventory = useItemStore((state) => state.inventory);
  const [mode, setMode] = useState<"Overview" | "By Category">("Overview");
  const totalProducts = inventory.length;

  // const OverviewOptions: Option[] = Overview.map((s) => ({
  //   value: s.studentId,
  //   label: `${s.studentId} — ${s.firstName} ${s.lastName}`,
  // }));
  // const CategoryOptions: Option[] = courses.map((c) => ({
  //   value: c.courseCode,
  //   label: `${c.courseCode} — ${c.courseTitle}`,
  // }));

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-3">
        <Tabs
          value={mode}
          onValueChange={(v) => setMode(v as "Overview" | "By Category")}
        >
          <TabsList>
            <TabsTrigger value="Overview">Overview</TabsTrigger>
            <TabsTrigger value="By Category">By Category</TabsTrigger>
          </TabsList>

          <TabsContent value="course" className="pt-2">
            {/* <OptionSelect
            id="filterCourse"
            options={[{ value: "all", label: "ทุกวิชา" }, ...courseOptions]}
            value={filterCourse}
            onChange={setFilterCourse}
            placeholder="ทุกวิชา"
          /> */}
          </TabsContent>
          <TabsContent value="student" className="pt-2">
            {/* <OptionSelect
            id="filterStudent"
            options={[{ value: "all", label: "ทุกคน" }, ...studentOptions]}
            value={filterStudent}
            onChange={setFilterStudent}
            placeholder="ทุกคน"
          /> */}
          </TabsContent>
        </Tabs>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Total Stock Value
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl text-red-500 font-bold">฿...</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Total Products
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl text-blue-500 font-bold">
              {totalProducts}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Total Units in Stock
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl text-green-700 font-bold">...</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
