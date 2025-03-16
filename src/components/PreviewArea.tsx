
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Separator } from "@/components/ui/separator";

type PreviewAreaProps = {
  fontFamily: string;
  fontWeight: string;
  customText: string;
};

const PreviewArea = ({
  fontFamily,
  fontWeight,
  customText,
}: PreviewAreaProps) => {
  const selectedFont = `font-${fontFamily}`;
  const demoText = customText || "The quick brown fox jumps over the lazy dog.";
  
  const textClasses = `${selectedFont} ${fontWeight}`;
  
  return (
    <div className="space-y-8">
      {/* Text Preview */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Text Preview</h3>
        <div>
          <p className={textClasses}>{demoText}</p>
          <p className={`${textClasses} mt-2`}>
            ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789
          </p>
        </div>
      </div>
      
      <Separator />
      
      {/* Component Previews */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Components Preview</h3>
        
        {/* Buttons */}
        <div className="space-y-2">
          <h4 className={`${textClasses} text-sm`}>Buttons</h4>
          <div className="flex flex-wrap gap-2">
            <Button className={textClasses}>Primary</Button>
            <Button variant="secondary" className={textClasses}>Secondary</Button>
            <Button variant="outline" className={textClasses}>Outline</Button>
            <Button variant="destructive" className={textClasses}>Destructive</Button>
          </div>
        </div>
        
        {/* Cards */}
        <div className="space-y-2">
          <h4 className={`${textClasses} text-sm`}>Card</h4>
          <Card>
            <CardHeader>
              <CardTitle className={textClasses}>Card Title</CardTitle>
              <CardDescription className={textClasses}>Card description text</CardDescription>
            </CardHeader>
            <CardContent>
              <p className={textClasses}>This is sample content inside a card component.</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" className={textClasses}>Cancel</Button>
              <Button className={textClasses}>Submit</Button>
            </CardFooter>
          </Card>
        </div>
        
        {/* Table */}
        <div className="space-y-2">
          <h4 className={`${textClasses} text-sm`}>Table</h4>
          <div className="border rounded-md">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className={textClasses}>Name</TableHead>
                  <TableHead className={textClasses}>Status</TableHead>
                  <TableHead className={textClasses}>Role</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className={textClasses}>John Doe</TableCell>
                  <TableCell><Badge className={textClasses}>Active</Badge></TableCell>
                  <TableCell className={textClasses}>Developer</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={textClasses}>Jane Smith</TableCell>
                  <TableCell><Badge variant="outline" className={textClasses}>Inactive</Badge></TableCell>
                  <TableCell className={textClasses}>Designer</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
        
        {/* Chat Interface */}
        <div className="space-y-2">
          <h4 className={`${textClasses} text-sm`}>Chat Interface</h4>
          <div className="border rounded-md p-4 space-y-4">
            <div className="flex items-start gap-3">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="bg-muted p-3 rounded-lg">
                <p className={textClasses}>Hey there! How's it going?</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 justify-end">
              <div className="bg-primary text-primary-foreground p-3 rounded-lg">
                <p className={textClasses}>I'm doing great! Just testing this font.</p>
              </div>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>ME</AvatarFallback>
              </Avatar>
            </div>
            
            <div className="flex gap-2 mt-4">
              <Input placeholder="Type a message..." className={textClasses} />
              <Button className={textClasses}>Send</Button>
            </div>
          </div>
        </div>
        
        {/* Hover Card */}
        <div className="space-y-2">
          <h4 className={`${textClasses} text-sm`}>Hover Card</h4>
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button variant="link" className={textClasses}>Hover over me</Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="flex justify-between space-x-4">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>VC</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h4 className={`${textClasses} text-sm font-semibold`}>@shadcn</h4>
                  <p className={`${textClasses} text-sm`}>
                    This hover card shows how text appears with your selected font styles.
                  </p>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
      </div>
    </div>
  );
};

export default PreviewArea;
