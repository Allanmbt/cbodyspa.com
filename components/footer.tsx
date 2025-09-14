import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center space-y-6">
          {/* Logo */}
          <div>
            <h3 className="text-2xl font-bold text-primary">CBODY</h3>
            <p className="text-muted-foreground mt-2">
              Professional outcall massage services in Bangkok
            </p>
          </div>

          <Separator className="my-6" />

          {/* Disclaimer */}
          <div className="max-w-2xl mx-auto">
            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Disclaimer:</strong> We provide only legitimate massage services and do not engage in any illegal activities. 
              All services are professional therapeutic treatments focused on relaxation and wellness.
            </p>
          </div>

          <Separator className="my-6" />

          {/* Bottom Section */}
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} CBODY. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-6 text-sm">
              <a 
                href="/sitemap.xml" 
                className="text-muted-foreground hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sitemap
              </a>
              <a 
                href="/robots.txt" 
                className="text-muted-foreground hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Robots
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 