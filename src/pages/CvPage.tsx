const CV_URL = "/amin-parvareshnia-cv.pdf";

/**
 * CV pages as images, generated from the PDF with:
 *   pdftoppm -png -r 200 public/amin-parvareshnia-cv.pdf src/assets/cv/cv-page
 * Every PNG in that folder is picked up in name order, so re-running the command
 * after updating the CV is all that's needed, even if the page count changes.
 */
const pages = Object.entries(
  import.meta.glob<string>("../assets/cv/*.png", { eager: true, import: "default" }),
)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([, src]) => src);

export function CvPage() {
  return (
    <div className="cv">
      <header className="page-header cv__header">
        <h1 className="page-header__title">CV</h1>
        <a className="cv__download" href={CV_URL} download>
          Download PDF
        </a>
      </header>

      <div className="cv__pages">
        {pages.map((src, index) => (
          <img
            key={src}
            className="cv__page"
            src={src}
            alt={`CV page ${index + 1} of ${pages.length}`}
            width={1654}
            height={2339}
            // First page is above the fold; load the rest as they scroll into view.
            loading={index === 0 ? "eager" : "lazy"}
            decoding="async"
          />
        ))}
      </div>
    </div>
  );
}
