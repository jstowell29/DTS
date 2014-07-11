'use strict';

dtsDocs.controller('TreeController',
	function TreeController($scope) {

		

		$scope.collapse = function() {
			
			/*$(event.target).parent().children('ul.tree').slideToggle(300);*/

			$(event.target).parent().siblings().children('.tree-toggler').removeClass('show').next().slideUp();
    		$(event.target).toggleClass('show').next().slideToggle();
		};

		$scope.handlers = {
			  "names": [
			    {
			      "title": "Autoship",
			      "description": "Autoship Services",
			      "services": [
				        {
				          "id": "autoship-gettemplate",
				          "title": "getTemplate"
				        }
			      	]
			    },
			    {
			      "title": "Commission Hub",
			      "description": "Commission Hub Services",
			      "services": [
			        {
			          "id": "commissionhub-addautoship",
			          "title": "addAutoship"
			        },
			        {
			          "id": "commissionhub-adddistributor",
			          "title": "addDistributor"
			        },
			        {
			          "id": "commissionhub-addorder",
			          "title": "addOrder"
			        },
			        {
			          "id": "commissionhub-addwaiver",
			          "title": "addWaiver"
			        },
			        {
			          "id": "commissionhub-deleteautoship",
			          "title": "deleteAutoship"
			        },
			        {
			          "id": "commissionhub-deleteorder",
			          "title": "deleteOrder"
			        },
			        {
			          "id": "commissionhub-deletewaiver",
			          "title": "deleteWaiver"
			        },
			        {
			          "id": "commissionhub-getautoships",
			          "title": "getAutoships"
			        },
			        {
			          "id": "commissionhub-getdownline",
			          "title": "getDownline"
			        },
			        {
			          "id": "commissionhub-getupline",
			          "title": "getUpline"
			        },
			        {
			          "id": "commissionhub-getwaivers",
			          "title": "getWaivers"
			        },
			        {
			          "id": "commissionhub-movedistributor",
			          "title": "moveDistributor"
			        },
			        {
			          "id": "commissionhub-purgedistributor",
			          "title": "purgeDistributor"
			        },
			        {
			          "id": "commissionhub-suspenddistributor",
			          "title": "suspendDistributor"
			        },
			        {
			          "id": "commissionhub-terminatedistributor",
			          "title": "terminateDistributor"
			        },
			        {
			          "id": "commissionhub-updateautoship",
			          "title": "updateAutoship"
			        },
			        {
			          "id": "commissionhub-updatedistributor",
			          "title": "updateDistributor"
			        },
			        {
			          "id": "commissionhub-updateorder",
			          "title": "updateOrder"
			        },
			        {
			          "id": "commissionhub-updatewaiver",
			          "title": "updateWaiver"
			        }
			      ]
			    },
			    {
			      "title": "Distributor",
			      "description": "Distributor Services",
			      "services": [
			        {
			          "id": "distributor-changestatus",
			          "title": "changeStatus"
			        },
			        {
			          "id": "distributor-checkAcctStatus",
			          "title": "checkAcctStatus"
			        },
			        {
			          "id": "distributor-create",
			          "title": "create"
			        },
			        {
			          "id": "distributor-deletecreditcardonfile",
			          "title": "deleteCreditCardOnFile"
			        },
			        {
			          "id": "distributor-deleteshiptoaddress",
			          "title": "deleteShipToAddress"
			        },
			        {
			          "id": "distributor-getacctinq",
			          "title": "getAcctInq"
			        },
			        {
			          "id": "distributor-getbankdraftinfo",
			          "title": "getBankDraftInfo"
			        },
			        {
			          "id": "distributor-getbankdraftvalid",
			          "title": "getBankDraftValid"
			        },
			        {
			          "id": "distributor-getbankinfo",
			          "title": "getBankInfo"
			        },
			        {
			          "id": "distributor-getcreditcardsonfile",
			          "title": "getCreditCardsOnFile"
			        },
			        {
			          "id": "distributor-getdistinfo",
			          "title": "getDistInfo"
			        },
			        {
			          "id": "distributor-getphoto",
			          "title": "getPhoto"
			        },
			        {
			          "id": "distributor-getshiptoaddress",
			          "title": "getShipToAddress"
			        },
			        {
			          "id": "distributor-getshiptoaddresses",
			          "title": "getShipToAddresses"
			        },
			        {
			          "id": "distributor-search",
			          "title": "search"
			        },
			        {
			          "id": "distributor-setbankdraftinfo",
			          "title": "setBankDraftInfo"
			        },
			        {
			          "id": "distributor-setcreditcardonfile",
			          "title": "setCreditCardOnFile"
			        },
			        {
			          "id": "distributor-setemail",
			          "title": "setEmail"
			        },
			        {
			          "id": "distributor-setphoto",
			          "title": "setPhoto"
			        },
			        {
			          "id": "distributor-setshiptoaddress",
			          "title": "setShipToAddress"
			        },
			        {
			          "id": "distributor-suspend",
			          "title": "suspend"
			        },
			        {
			          "id": "distributor-terminate",
			          "title": "terminate"
			        },
			        {
			          "id": "distributor-update",
			          "title": "update"
			        },
			        {
			          "id": "distributor-validate",
			          "title": "validate"
			        },
			        {
			          "id": "distributor-validateaddress",
			          "title": "validateAddress"
			        }
			      ]
			    },
			    {
			      "title": "DTParameters",
			      "description": "DataTrax Parameter Settings",
			      "services": [
			        {
			          "id": "dtparameters-distranksinfo",
			          "title": "distRanksInfo"
			        },
			        {
			          "id": "dtparameters-diststatusinfo",
			          "title": "distStatusInfo"
			        },
			        {
			          "id": "dtparameters-getallperiods",
			          "title": "getAllPeriods"
			        },
			        {
			          "id": "dtparameters-getbonustypes",
			          "title": "getBonusTypes"
			        },
			        {
			          "id": "dtparameters-getnextnumber",
			          "title": "getNextNumber"
			        },
			        {
			          "id": "dtparameters-getranks",
			          "title": "getRanks"
			        },
			        {
			          "id": "dtparameters-listshipvia",
			          "title": "listShipVia"
			        },
			      ]
			    },
			    {
			      "title": "Earnings",
			      "description": "Manage commission related payout information",
			      "services": [
			        {
			          "id": "earnings-BonusHistory",
			          "title": "BonusHistory"
			        },
			        {
			          "id": "earnings-CommissionSummary",
			          "title": "CommissionSummary"
			        },
			        {
			          "id": "earnings-getDetail",
			          "title": "getDetail"
			        },
			        {
			          "id": "earnings-getEarningsByTypeSummary",
			          "title": "getEarningsByTypeSummary"
			        },
			        {
			          "id": "earnings-getEarningsDetail",
			          "title": "getEarningsDetail"
			        },
			        {
			          "id": "earnings-getEarningsSummary",
			          "title": "getEarningsSummary"
			        },
			        {
			          "id": "earnings-getPaidOnDetail",
			          "title": "getPaidOnDetail"
			        },
			        {
			          "id": "earnings-getPaidOnSummary",
			          "title": "getPaidOnSummary"
			        },
			        {
			          "id": "earnings-getPeriods",
			          "title": "getPeriods"
			        },
			        {
			          "id": "earnings-getRankAdvanceDetail",
			          "title": "getRankAdvanceDetail"
			        },
			        {
			          "id": "earnings-getSummary",
			          "title": "getSummary"
			        }
			      ]
			    },
			    {
			      "title": "FastTree Admin",
			      "description": "FastTree DataBase Information",
			      "services": [
			        {
			          "id": "ftadmin-getfieldinfo",
			          "title": "getfieldinfo"
			        },
			        {
			          "id": "ftadmin-getfileinfo",
			          "title": "getfileinfo"
			        },
			        {
			          "id": "ftadmin-isinfasttree",
			          "title": "isinfasttree"
			        },
			        {
			          "id": "ftadmin-latestfileinfo",
			          "title": "latestfileinfo"
			        },
			        {
			          "id": "ftadmin-singlefileinfo",
			          "title": "singlefileinfo"
			        }
			      ]
			    },
			    {
			      "title": "Genealogy",
			      "description": "description of module2",
			      "services": [
			        {
			          "id": "genealogy-checkUplineDownline",
			          "title": "checkUplineDownline"
			        },
			        {
			          "id": "genealogy-distInfoBySavedQuery",
			          "title": "distInfoBySavedQuery"
			        },
			        {
			          "id": "genealogy-genealogyBySavedQuery",
			          "title": "genealogyBySavedQuery"
			        },
			        {
			          "id": "genealogy-genealogyDetailBySavedQuery",
			          "title": "genealogyDetailBySavedQuery"
			        },
			        {
			          "id": "genealogy-getUpline",
			          "title": "getUpline"
			        },
			        {
			          "id": "genealogy-isInDownline",
			          "title": "isInDownline"
			        },
			        {
			          "id": "genealogy-summaryReport",
			          "title": "summaryReport"
			        },
			        {
			          "id": "genealogy-testIsInDownline",
			          "title": "testIsInDownline"
			        },
			        {
			          "id": "genealogy-testIsInUpline",
			          "title": "testIsInUpline"
			        },
			        {
			          "id": "genealogy-treeReport",
			          "title": "treeReport"
			        },
			        {
			          "id": "genealogy-treeReportBySavedQuery",
			          "title": "treeReportBySavedQuery"
			        },
			        {
			          "id": "genealogy-upline",
			          "title": "upline"
			        }
			      ]
			    },
			    {
			      "title": "Group",
			      "description": "Group Services",
			      "services": [
			        {
			          "id": "group-addphoto",
			          "title": "addphoto"
			        },
			        {
			          "id": "group-deletedefinition",
			          "title": "deleteDefintion"
			        },
			        {
			          "id": "group-deleteNote",
			          "title": "deleteNote"
			        },
			        {
			          "id": "group-deletePhoto",
			          "title": "deletePhoto"
			        },
			        {
			          "id": "group-getDefaultPhoto",
			          "title": "getDefaultPhoto"
			        },
			        {
			          "id": "group-getDefinition",
			          "title": "getDefinition"
			        },
			        {
			          "id": "group-getGroupMembership",
			          "title": "getGroupMembership"
			        },
			        {
			          "id": "group-getIds",
			          "title": "getIds"
			        },
			        {
			          "id": "group-getIdsBySavedQuery",
			          "title": "getIdsBySavedQuery"
			        },
			        {
			          "id": "group-getName",
			          "title": "getName"
			        },
			        {
			          "id": "group-getNote",
			          "title": "getNote"
			        },
			        {
			          "id": "group-getPhoto",
			          "title": "getPhoto"
			        },
			        {
			          "id": "group-getProspect",
			          "title": "getProspect"
			        },
			        {
			          "id": "group-getQuery",
			          "title": "getQuery"
			        },
			        {
			          "id": "group-pinIds",
			          "title": "pinIds"
			        },
			        {
			          "id": "group-setDefaultPhoto",
			          "title": "setDefaultPhoto"
			        },
			        {
			          "id": "group-setDefinition",
			          "title": "setDefinition"
			        },
			        {
			          "id": "group-setDefinitionBySavedQuery",
			          "title": "setDefinitionBySavedQuery"
			        },
			        {
			          "id": "group-setName",
			          "title": "setName"
			        },
			        {
			          "id": "group-setNote",
			          "title": "setNote"
			        },
			        {
			          "id": "group-setProspect",
			          "title": "setProspect"
			        },
			        {
			          "id": "group-setQuery",
			          "title": "setQuery"
			        },
			        {
			          "id": "group-setQueryBySavedQuery",
			          "title": "setQueryBySavedQuery"
			        }
			      ]
			    },
			    {
			      "title": "MessageBox",
			      "description": "description of module2",
			      "services": [
			        {
			          "id": "messagebox-archivemessage",
			          "title": "archivemessage"
			        },
			        {
			          "id": "messagebox-deletemessage",
			          "title": "deleteMessage"
			        },
			        {
			          "id": "messagebox-deletemessagebox",
			          "title": "deleteMessageBox"
			        },
			        {
			          "id": "messagebox-deleteNotify",
			          "title": "deleteNotify"
			        },
			        {
			          "id": "messagebox-getBlock",
			          "title": "getBlock"
			        },
			        {
			          "id": "messagebox-getIdList",
			          "title": "getIdList"
			        },
			        {
			          "id": "messagebox-getMessageBox",
			          "title": "getMessageBox"
			        },
			        {
			          "id": "messagebox-getMessageListDetail",
			          "title": "getMessageListDetail"
			        },
			        {
			          "id": "messagebox-getMessageListSummary",
			          "title": "getMessageListSummary"
			        },
			        {
			          "id": "messagebox-getNotify",
			          "title": "getNotify"
			        },
			        {
			          "id": "messagebox-getSentList",
			          "title": "getSentList"
			        },
			        {
			          "id": "messagebox-getUsage",
			          "title": "getUsage"
			        },
			        {
			          "id": "messagebox-moveMessage",
			          "title": "moveMessage"
			        },
			        {
			          "id": "messagebox-setBlock",
			          "title": "setBlock"
			        },
			        {
			          "id": "messagebox-setBroadcast",
			          "title": "setBroadcast"
			        },
			        {
			          "id": "messagebox-setBroadcastBySavedQuery",
			          "title": "setBroadcastBySavedQuery"
			        },
			        {
			          "id": "messagebox-setBroadcastStatus",
			          "title": "setBroadcastStatus"
			        },
			        {
			          "id": "messagebox-setMessage",
			          "title": "setMessage"
			        },
			        {
			          "id": "messagebox-setMessageBox",
			          "title": "setMessageBox"
			        },
			        {
			          "id": "messagebox-setMessageStatus",
			          "title": "setMessageStatus"
			        },
			        {
			          "id": "messagebox-setNotify",
			          "title": "setNotify"
			        }
			      ]
			    },
			    {
			      "title": "Orders",
			      "description": "Orders List of Handlers",
			      "services": [
			        {
			          "id": "orders-cancelAutoOrder",
			          "title": "cancelAutoOrder"
			        },
			        {
			          "id": "orders-create",
			          "title": "create"
			        },
			        {
			          "id": "orders-getInvoice",
			          "title": "getInvoice"
			        },
			        {
			          "id": "orders-getProductList",
			          "title": "getProductList"
			        },
			        {
			          "id": "orders-listAutoOrders",
			          "title": "listAutoOrders"
			        },
			        {
			          "id": "orders-listOrders",
			          "title": "listOrders"
			        },
			        {
			          "id": "orders-setAutoOrderNextProcDate",
			          "title": "setAutoOrderNextProcDate"
			        },
			        {
			          "id": "orders-shipVerify",
			          "title": "shipVerify"
			        }
			      ]
			    },
			    {
			      "title": "ProgressTab",
			      "description": "description of module2",
			      "services": [
			        {
			          "id": "progresstab-addStep",
			          "title": "addStep"
			        },
			        {
			          "id": "progresstab-createPlan",
			          "title": "createPlan"
			        },
			        {
			          "id": "progresstab-deleteNote",
			          "title": "deleteNote"
			        },
			        {
			          "id": "progresstab-deletePlan",
			          "title": "deletePlan"
			        },
			        {
			          "id": "progresstab-dropStep",
			          "title": "dropStep"
			        },
			        {
			          "id": "progresstab-modifyPlan",
			          "title": "modifyPlan"
			        },
			        {
			          "id": "progresstab-readNote",
			          "title": "readNote"
			        },
			        {
			          "id": "progresstab-readPlan",
			          "title": "readPlan"
			        },
			        {
			          "id": "progresstab-stepGroupDropped",
			          "title": "stepGroupDropped"
			        },
			        {
			          "id": "progresstab-stepGroupModify",
			          "title": "stepGroupModify"
			        },
			        {
			          "id": "progresstab-stepGroupName",
			          "title": "stepGroupName"
			        },
			        {
			          "id": "progresstab-stepGroupOrder",
			          "title": "stepGroupOrder"
			        },
			        {
			          "id": "progresstab-stepGroupUndropped",
			          "title": "stepGroupUndropped"
			        },
			        {
			          "id": "progresstab-stepReorder",
			          "title": "stepReorder"
			        },
			        {
			          "id": "progresstab-unDropStep",
			          "title": "unDropStep"
			        },
			        {
			          "id": "progresstab-writeNote",
			          "title": "writeNote"
			        }
			      ]
			    },
			    {
			      "title": "ProtectPay",
			      "description": "ProtectPay Services",
			      "services": [
			        {
			          "id": "protectpay-getPayerInformation",
			          "title": "getPayerInformation"
			        }
			      ]
			    },
			    {
			      "title": "Qualifications",
			      "description": "Qualification Services",
			      "services": [
			        {
			          "id": "qualifications-doGetComInfo",
			          "title": "doGetComInfo"
			        },
			        {
			          "id": "qualifications-getBQDetail",
			          "title": "getBQDetail"
			        },
			        {
			          "id": "qualifications-getBQRQuals",
			          "title": "getBQRQuals"
			        },
			        {
			          "id": "qualifications-getBQRSummary",
			          "title": "getBQRSummary"
			        },
			        {
			          "id": "qualifications-getBQVolDetail",
			          "title": "getBQVolDetail"
			        },
			        {
			          "id": "qualifications-getCorpQualPercentage",
			          "title": "getCorpQualPercentage"
			        }
			      ]
			    },
			    {
			      "title": "Report Groups",
			      "description": "description of module2",
			      "services": [
			        {
			          "id": 2,
			          "title": "Week 02"
			        },
			        {
			          "id": 3,
			          "title": "Week 03"
			        }
			      ]
			    },
			    {
			      "title": "Reports",
			      "description": "description of module2",
			      "services": [
			        {
			          "id": 2,
			          "title": "Week 02"
			        },
			        {
			          "id": 3,
			          "title": "Week 03"
			        }
			      ]
			    },
			    {
			      "title": "Run Reports",
			      "description": "description of module2",
			      "services": [
			        {
			          "id": 2,
			          "title": "Week 02"
			        },
			        {
			          "id": 3,
			          "title": "Week 03"
			        }
			      ]
			    },
			    {
			      "title": "Session",
			      "description": "Session Services",
			      "services": [
			        {
			          "id": "session-getUser",
			          "title": "getUser"
			        },
			        {
			          "id": "session-login",
			          "title": "login"
			        },
			        {
			          "id": "session-logout",
			          "title": "logout"
			        },
			        {
			          "id": "session-ping",
			          "title": "ping"
			        }
			      ]
			    },
			    {
			      "title": "Telephony",
			      "description": "Telephony Services",
			      "services": [
			        {
			          "id": "telephony-deleteFollow",
			          "title": "deleteFollow"
			        },
			        {
			          "id": "telephony-getFollow",
			          "title": "getFollow"
			        },
			        {
			          "id": "telephony-getNumber",
			          "title": "getNumber"
			        },
			        {
			          "id": "telephony-getParm",
			          "title": "getParm"
			        },
			        {
			          "id": "telephony-getRotate",
			          "title": "getRotate"
			        },
			        {
			          "id": "telephony-removeNumber",
			          "title": "removeNumber"
			        },
			        {
			          "id": "telephony-setFollow",
			          "title": "setFollow"
			        },
			        {
			          "id": "telephony-setNumber",
			          "title": "setNumber"
			        },
			        {
			          "id": "telephony-setParm",
			          "title": "setParm"
			        },
			        {
			          "id": "telephony-setRotate",
			          "title": "setRotate"
			        }
			      ]
			    },
			    {
			      "title": "VO",
			      "description": "Evo Services",
			      "services": [
			        {
			          "id": "vo-checkAccount",
			          "title": "checkAccount"
			        },
			        {
			          "id": "vo-checkPackage",
			          "title": "checkPackage"
			        },
			        {
			          "id": "vo-checkPassword",
			          "title": "checkPassword"
			        },
			        {
			          "id": "vo-registration",
			          "title": "registration"
			        }
			      ]
			    },
			    {
			      "title": "Web Meeting",
			      "description": "Web Meeting Services",
			      "services": [
			        {
			          "id": "webmeeting-getWebMeetingList",
			          "title": "getWebMeetingList"
			        }
			      ]
			    }
			  ]
			}
	}
);