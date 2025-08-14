import { type PeriodModel } from '@lib/shared/datetime/utils/Period/Period.models';

export type RateModel = {
  currency: string;

  maturity?: Date;

  name: string;

  tenor?: PeriodModel;
};

// // Common tenor types
// export type Tenor =
//   | "ON"  // Overnight
//   | "TN"  // Tomorrow/Next
//   | "SN"  // Spot/Next
//   | "1W"
//   | "2W"
//   | "3W"
//   | "1M"
//   | "2M"
//   | "3M"
//   | "6M"
//   | "9M"
//   | "1Y"
//   | string; // fallback for non-standard

// // Interest rate instrument categories
// export type RateInstrumentType =
//   | "OvernightIndex"
//   | "Future"
//   | "OIS_Swap"
//   | "IRS_Swap"
//   | "Treasury"
//   | "Deposit"
//   | "Bond"
//   | "Other";

// export interface RateProps {
//   instrumentType: RateInstrumentType;
//   currency: string; // ISO 4217 (e.g., "USD", "EUR")
//   indexName: string; // e.g., "SOFR", "EURIBOR", "UST"
//   tenor?: Tenor; // optional for instruments like treasuries with explicit maturity date
//   maturity?: Date; // e.g., swap maturity date, bond maturity date
//   tradeDate?: Date;
//   settlementDate?: Date;
//   rateValue: number; // in decimal form (e.g., 0.0525 for 5.25%)
//   dayCountConvention?: string; // e.g., "ACT/360", "30/360", "ACT/ACT"
//   compounding?: "Simple" | "Annual" | "SemiAnnual" | "Quarterly" | "Continuous";
//   additionalMeta?: Record<string, unknown>; // room for instrument-specific extras
// }

// export class InterestRate {
//   instrumentType: RateInstrumentType;
//   currency: string;
//   indexName: string;
//   tenor?: Tenor;
//   maturity?: Date;
//   tradeDate?: Date;
//   settlementDate?: Date;
//   rateValue: number;
//   dayCountConvention?: string;
//   compounding?: "Simple" | "Annual" | "SemiAnnual" | "Quarterly" | "Continuous";
//   additionalMeta?: Record<string, unknown>;

//   constructor(props: RateProps) {
//     this.instrumentType = props.instrumentType;
//     this.currency = props.currency;
//     this.indexName = props.indexName;
//     this.tenor = props.tenor;
//     this.maturity = props.maturity;
//     this.tradeDate = props.tradeDate;
//     this.settlementDate = props.settlementDate;
//     this.rateValue = props.rateValue;
//     this.dayCountConvention = props.dayCountConvention;
//     this.compounding = props.compounding;
//     this.additionalMeta = props.additionalMeta ?? {};
//   }

//   // Return rate as percentage (e.g., 5.25 instead of 0.0525)
//   get percentage(): number {
//     return this.rateValue * 100;
//   }

//   // Check if instrument is overnight
//   get isOvernight(): boolean {
//     return this.tenor === "ON" || this.instrumentType === "OvernightIndex";
//   }

//   // Days to maturity (if applicable)
//   daysToMaturity(referenceDate: Date = new Date()): number | null {
//     if (!this.maturity) return null;
//     const diff = this.maturity.getTime() - referenceDate.getTime();
//     return Math.floor(diff / (1000 * 60 * 60 * 24));
//   }

//   // Example compounding conversion (Simple to Annual)
//   toAnnualized(): number {
//     if (!this.compounding || this.compounding === "Annual") return this.rateValue;
//     // Simplified conversions
//     switch (this.compounding) {
//       case "Simple":
//         return this.rateValue; // already per period
//       case "SemiAnnual":
//         return (1 + this.rateValue / 2) ** 2 - 1;
//       case "Quarterly":
//         return (1 + this.rateValue / 4) ** 4 - 1;
//       case "Continuous":
//         return Math.exp(this.rateValue) - 1;
//       default:
//         return this.rateValue;
//     }
//   }
// }
