import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
{/* Right Column */}
<div className="lg:w-[65%] w-full">
  <Card className="h-full bg-card/50 border-border/50">
    <CardContent className="p-8 h-full overflow-y-auto">
      <h3 className="text-2xl font-bold mb-2">{currentProject.title}</h3>
      <p className="text-muted-foreground mb-4">{currentProject.longDescription}</p>

      {/* Tech Tags */}
      <div className="flex gap-2 mb-4 flex-wrap">
        {currentProject.technologies.map((tech, i) => (
          <Badge key={i} variant="secondary">{tech}</Badge>
        ))}
      </div>

      {/* Code Preview */}
      <div className="relative mb-6">
        <div className="absolute top-2 right-2">
          <Button size="sm" variant="ghost" onClick={() => navigator.clipboard.writeText(currentProject.embed?.code || "")}>
            Copy
          </Button>
        </div>
        <SyntaxHighlighter language="python" style={oneDark} customStyle={{ borderRadius: "0.5rem", padding: "1rem" }}>
          {currentProject.embed?.code || "# No code sample provided"}
        </SyntaxHighlighter>
      </div>

      {/* Optional Demo iframe */}
      {currentProject.embed?.demo && (
        <iframe src={currentProject.embed.demo} className="w-full h-64 rounded-lg border mb-4" />
      )}

      {/* Optional PPT */}
      {currentProject.embed?.ppt && (
        <iframe src={currentProject.embed.ppt} className="w-full h-64 rounded-lg border" allowFullScreen />
      )}
    </CardContent>
  </Card>
</div>
