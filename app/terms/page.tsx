"use client";

import Navigation from "../components/Navigation";
import { useTranslation } from "react-i18next";

export default function Terms() {
  const { t } = useTranslation('common');

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gray-100 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">{t('terms.title')}</h1>

            <div className="space-y-6 text-gray-600">
              <p className="text-lg leading-relaxed">
                📅 {t('terms.lastUpdated')} <strong>{new Date().toLocaleDateString("en-US")}</strong>
              </p>

              {/* Interpretation & Definitions */}
              <div className="bg-blue-50 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold text-blue-800 mb-3">{t('terms.sections.definitions.title')}</h2>
                <h3 className="text-blue-700 font-semibold mb-2">{t('terms.sections.definitions.interpretation.title')}</h3>
                <p className="text-blue-700 mb-3">
                  {t('terms.sections.definitions.interpretation.content')}
                </p>
                <h3 className="text-blue-700 font-semibold mb-2">{t('terms.sections.definitions.definitionsList.title')}</h3>
                <ul className="text-blue-700 space-y-2">
                  <li>🏢 <strong>{t('terms.sections.definitions.definitionsList.affiliate')}</strong></li>
                  <li>🌍 <strong>{t('terms.sections.definitions.definitionsList.country')}</strong></li>
                  <li>🏭 <strong>{t('terms.sections.definitions.definitionsList.company')}</strong></li>
                  <li>💻 <strong>{t('terms.sections.definitions.definitionsList.device')}</strong></li>
                  <li>🌐 <strong>{t('terms.sections.definitions.definitionsList.service')}</strong></li>
                  <li>📜 <strong>{t('terms.sections.definitions.definitionsList.terms')}</strong></li>
                  <li>📲 <strong>{t('terms.sections.definitions.definitionsList.thirdParty')}</strong></li>
                  <li>🔗 <strong>{t('terms.sections.definitions.definitionsList.website')}</strong></li>
                  <li>👤 <strong>{t('terms.sections.definitions.definitionsList.you')}</strong></li>
                </ul>
              </div>

              {/* Acknowledgment */}
              <div className="bg-green-50 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold text-green-800 mb-3">{t('terms.sections.acknowledgment.title')}</h2>
                <p className="text-green-700">
                  {t('terms.sections.acknowledgment.content')}
                </p>
              </div>

              {/* Links to Other Websites */}
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold text-yellow-800 mb-3">{t('terms.sections.links.title')}</h2>
                <p className="text-yellow-700">
                  {t('terms.sections.links.content')}
                </p>
              </div>

              {/* Termination */}
              <div className="bg-red-50 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold text-red-800 mb-3">{t('terms.sections.termination.title')}</h2>
                <p className="text-red-700">
                  {t('terms.sections.termination.content')}
                </p>
              </div>

              {/* Limitation of Liability */}
              <div className="bg-purple-50 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold text-purple-800 mb-3">{t('terms.sections.liability.title')}</h2>
                <p className="text-purple-700">
                  {t('terms.sections.liability.content')}
                </p>
              </div>

              {/* Disclaimer */}
              <div className="bg-indigo-50 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold text-indigo-800 mb-3">{t('terms.sections.disclaimer.title')}</h2>
                <p className="text-indigo-700">
                  {t('terms.sections.disclaimer.content')}
                </p>
              </div>

              {/* Governing Law */}
              <div className="bg-pink-50 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold text-pink-800 mb-3">{t('terms.sections.governingLaw.title')}</h2>
                <p className="text-pink-700">
                  {t('terms.sections.governingLaw.content')}
                </p>
              </div>

              {/* Disputes */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">{t('terms.sections.disputes.title')}</h2>
                <p className="text-gray-700">
                  {t('terms.sections.disputes.content')}
                </p>
              </div>

              {/* EU & US */}
              <div className="bg-green-100 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold text-green-900 mb-3">{t('terms.sections.euUsers.title')}</h2>
                <p className="text-green-800">{t('terms.sections.euUsers.content')}</p>

                <h2 className="text-2xl font-semibold text-green-900 mt-4 mb-3">{t('terms.sections.usCompliance.title')}</h2>
                <p className="text-green-800">{t('terms.sections.usCompliance.content')}</p>
              </div>

              {/* Severability */}
              <div className="bg-orange-50 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold text-orange-800 mb-3">{t('terms.sections.severability.title')}</h2>
                <h3 className="text-orange-700 font-semibold mb-2">{t('terms.sections.severability.severability.title')}</h3>
                <p className="text-orange-700">{t('terms.sections.severability.severability.content')}</p>
                <h3 className="text-orange-700 font-semibold mb-2">{t('terms.sections.severability.waiver.title')}</h3>
                <p className="text-orange-700">{t('terms.sections.severability.waiver.content')}</p>
              </div>

              {/* Translation */}
              <div className="bg-blue-100 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold text-blue-900 mb-3">{t('terms.sections.translation.title')}</h2>
                <p className="text-blue-800">
                  {t('terms.sections.translation.content')}
                </p>
              </div>

              {/* Changes */}
              <div className="bg-yellow-100 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold text-yellow-900 mb-3">{t('terms.sections.changes.title')}</h2>
                <p className="text-yellow-800">
                  {t('terms.sections.changes.content')}
                </p>
              </div>

              {/* Contact */}
              <div className="bg-gray-100 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">{t('terms.sections.contact.title')}</h2>
                <p className="text-gray-800">{t('terms.sections.contact.content')}</p>
                <ul className="text-gray-800 space-y-2 mt-3">
                  <li>📧 {t('terms.sections.contact.email')}</li>
                  <li>📞 {t('terms.sections.contact.phone')}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
