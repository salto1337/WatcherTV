import plTranslations from "../../translations/pl.json";
import enTranslations from "../../translations/en.json";

export function UseTranslation(language: string) {
	const currentLanguage = language === "pl" ? plTranslations : enTranslations;

	return currentLanguage;
}
