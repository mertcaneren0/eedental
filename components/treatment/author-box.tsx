import { AlertCircle } from "lucide-react"

export function AuthorBox() {
  return (
    <div className="mt-12 rounded-lg border-2 border-vizon/30 bg-vizon/5 p-6">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div className="h-16 w-16 rounded-full bg-vizon/20 flex items-center justify-center">
            <span className="text-2xl font-bold text-vizon">DE</span>
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-brown mb-2">
            Tıbbi Olarak İnceleyen: Dt. Emrecan Eren
          </h3>
          <p className="text-sm text-brown/70 mb-3">
            Mikroskopik Diş Tedavisi ve Estetik Diş Hekimliği Uzmanı. 
            TDB üyesi. Lüleburgaz'da modern diş hekimliği standartlarını belirleyen deneyimli hekim.
          </p>
          <div className="flex items-start gap-2 p-3 bg-cream rounded-md">
            <AlertCircle className="h-5 w-5 text-vizon flex-shrink-0 mt-0.5" />
            <p className="text-xs text-brown/70">
              <strong>Önemli Uyarı:</strong> Bu içerik sadece bilgilendirme amaçlıdır. 
              Tanı ve tedavi için mutlaka hekiminize danışınız. Her hasta farklıdır ve 
              tedavi planı kişiye özel olarak belirlenir.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
