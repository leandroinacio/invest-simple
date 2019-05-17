class Option {
    
    // basic
    name;
    shortName;
    sector;
    subSector;
    currentValue;
    mediumVol;
    marketValue;
    firmValue;
    lastBalance;
    totalActions;

    // indicators
    indPL;
    indPVP;
    indPEBIT;
    indPSR;
    indPActives;
    indPWorkingCapital; //capital de giro
    indPCurrentAssets; // ativo circulante
    indYield;
    indEVEBIT;
    indAssetsCirculation; // giro de ativos
    indNetRevenuesGrowth; // crescimento de receita liquida
    indLPA;
    indVPA;
    indGrossProfit; // margem bruta
    indGrossEBIT;
    indGrossLiquid; //margem liquida
    indEBITActive;
    indROIC;
    indROE;
    indCurrentLiquidity;
    indDebtPatr; // div / patrimonio 
    
    // last 12 months
    lastYearEBIT;
    lastYearNetRevenue;
    lastYearProfit;

    // last 3 months
    lastQuarterEBIT;
    lastQuarterNetRevenue;
    lastQuarterProfit;

    constructor(basicInfo, indicators, lastYear, lastQuarter) {
        
        // basic info
        this.name = basicInfo.name;
        this.shortName = basicInfo.shortName;
        this.sector = basicInfo.sector;
        this.subSector = basicInfo.subSector;
        this.currentValue = basicInfo.currentValue;
        this.mediumVol = basicInfo.mediumVol;
        this.marketValue = basicInfo.marketValue;
        this.firmValue = basicInfo.firmValue;
        this.lastBalance = basicInfo.lastBalance;
        this.totalActions = basicInfo.totalActions;
        
        // indicators
        this.indPL = indicators.indPL;
        this.indPVP = indicators.indPVP;
        this.indPEBIT = indicators.indPEBIT;
        this.indPSR = indicators.indPSR;
        this.indPActives = indicators.indPActives;
        this.indPWorkingCapital = indicators.indPWorkingCapital;
        this.indPCurrentAssets = indicators.indPCurrentAssets; 
        this.indYield = indicators.indYield;
        this.indEVEBIT = indicators.indEVEBIT;
        this.indAssetsCirculation = indicators.indAssetsCirculation; 
        this.indNetRevenuesGrowth = indicators.indNetRevenuesGrowth; 
        this.indLPA = indicators.indLPA;
        this.indVPA = indicators.indVPA;
        this.indGrossProfit = indicators.indGrossProfit;
        this.indGrossEBIT = indicators.indGrossEBIT;
        this.indGrossLiquid = indicators.indGrossLiquid;
        this.indEBITActive = indicators.indEBITActive;
        this.indROIC = indicators.indROIC;
        this.indROE = indicators.indROE;
        this.indCurrentLiquidity = indicators.indCurrentLiquidity;
        this.indDebtPatr = indicators.indDebtPatr;

        // last 12 months
        this.lastYearEBIT = lastYear.lastYearEBIT;
        this.lastYearNetRevenue = lastYear.lastYearNetRevenue;
        this.lastYearProfit = lastYear.lastYearProfit;
    
        // last 3 months
        this.lastQuarterEBIT = lastQuarter.lastQuarterEBIT;
        this.lastQuarterNetRevenue = lastQuarter.lastQuarterNetRevenue;
        this.lastQuarterProfit = lastQuarter.lastQuarterProfit;
    }

};