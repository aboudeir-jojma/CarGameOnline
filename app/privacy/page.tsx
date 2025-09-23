"use client";

import Navigation from "../components/Navigation";
import { useTranslation } from "react-i18next";

export default function Privacy() {
  const { t } = useTranslation('common');

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gray-100 py-12 px-4 mt-18">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">{t('privacy.title')}</h1>

            <div className="space-y-6 text-gray-600">
              <p className="text-lg leading-relaxed">
                📅 {t('privacy.lastUpdated')} <strong>{new Date().toLocaleDateString("en-US")}</strong>
              </p>

              {/* Section Definitions */}
              <div className="bg-blue-50 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold text-blue-800 mb-3">{t('privacy.sections.definitions.title')}</h2>
                <h3 className="text-blue-700 font-semibold mb-2">{t('privacy.sections.definitions.interpretation.title')}</h3>
                <p className="text-blue-700 mb-3">
                  {t('privacy.sections.definitions.interpretation.content')}
                </p>
                <h3 className="text-blue-700 font-semibold mb-2">{t('privacy.sections.definitions.definitionsList.title')}</h3>
                <ul className="text-blue-700 space-y-2">
                  <li>👤 <strong>{t('privacy.sections.definitions.definitionsList.account')}</strong></li>
                  <li>🏢 <strong>{t('privacy.sections.definitions.definitionsList.affiliate')}</strong></li>
                  <li>🏭 <strong>{t('privacy.sections.definitions.definitionsList.company')}</strong></li>
                  <li>🍪 <strong>{t('privacy.sections.definitions.definitionsList.cookies')}</strong></li>
                  <li>🌍 <strong>{t('privacy.sections.definitions.definitionsList.country')}</strong></li>
                  <li>💻 <strong>{t('privacy.sections.definitions.definitionsList.device')}</strong></li>
                  <li>🔐 <strong>{t('privacy.sections.definitions.definitionsList.personalData')}</strong></li>
                  <li>🌐 <strong>{t('privacy.sections.definitions.definitionsList.website')}</strong></li>
                  <li>🤝 <strong>{t('privacy.sections.definitions.definitionsList.serviceProvider')}</strong></li>
                  <li>📊 <strong>{t('privacy.sections.definitions.definitionsList.usageData')}</strong></li>
                </ul>
              </div>

              {/* Section Collecting Data */}
              <div className="bg-green-50 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold text-green-800 mb-3">{t('privacy.sections.collectingData.title')}</h2>
                <h3 className="text-green-700 font-semibold mb-2">{t('privacy.sections.collectingData.typesOfData.title')}</h3>
                <ul className="text-green-700 space-y-2">
                  <li>👤 {t('privacy.sections.collectingData.typesOfData.personalData')}</li>
                  <li>📊 {t('privacy.sections.collectingData.typesOfData.usageData')}</li>
                  <li>🍪 {t('privacy.sections.collectingData.typesOfData.tracking')}</li>
                </ul>
              </div>

              {/* Section Use of Data */}
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold text-yellow-800 mb-3">{t('privacy.sections.useOfData.title')}</h2>
                <ul className="text-yellow-700 space-y-2">
                  <li>🖥️ {t('privacy.sections.useOfData.purposes.0')}</li>
                  <li>👥 {t('privacy.sections.useOfData.purposes.1')}</li>
                  <li>📞 {t('privacy.sections.useOfData.purposes.2')}</li>
                  <li>📢 {t('privacy.sections.useOfData.purposes.3')}</li>
                  <li>🤝 {t('privacy.sections.useOfData.purposes.4')}</li>
                </ul>
              </div>

              {/* Section Security */}
              <div className="bg-purple-50 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold text-purple-800 mb-3">{t('privacy.sections.security.title')}</h2>
                <p className="text-purple-700">
                  {t('privacy.sections.security.content')}
                </p>
              </div>

              {/* Section Rights */}
              <div className="bg-red-50 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold text-red-800 mb-3">{t('privacy.sections.rights.title')}</h2>
                <ul className="text-red-700 space-y-2">
                  <li>🗑️ {t('privacy.sections.rights.rightsList.0')}</li>
                  <li>🏢 {t('privacy.sections.rights.rightsList.1')}</li>
                  <li>👮 {t('privacy.sections.rights.rightsList.2')}</li>
                  <li>📜 {t('privacy.sections.rights.rightsList.3')}</li>
                  <li>👶 {t('privacy.sections.rights.rightsList.4')}</li>
                  <li>🔗 {t('privacy.sections.rights.rightsList.5')}</li>
                  <li>✏️ {t('privacy.sections.rights.rightsList.6')}</li>
                </ul>
              </div>


            </div>
          </div>
        </div>
      </div>
    </>
  );
}
